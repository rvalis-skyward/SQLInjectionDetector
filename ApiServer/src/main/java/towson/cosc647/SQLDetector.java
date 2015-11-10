package towson.cosc647;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class SQLDetector {

    /**
     *  Returns true if any potential SQL statements are detected within the input parameter
     *  This is a catch all and hyper sensitive - it has a high potential for false positive
     *  and should only be used in the most restricted of inputs
     *  @param input  The inupt string to test against
     *  @return true if there is sql being injected
     */
    public static boolean detectAnything(String input){
        boolean detected = false;
        for(String token : SIGNATURES){
            if(input.toLowerCase().indexOf(token.toLowerCase()) > -1){
                detected = true;
            }
        }
        return detected;
    }
    
    /**
     * Returns true if the input has the potential to escape from a single quoted String
     * @param input
     * @return
     */
    public static boolean detectQuoteEscape(String input) {
        return detectEscape("'", input);
    }
    
    /**
     * Returns true if the input has the potential to escape from a double quoted String
     * @param input
     * @return
     */
    public static boolean detectDoubleQuoteEscape(String input) {
        return detectEscape("\"", input);
    }
    
    /**
     * Detects if a SQL comment occurs after an escape character
     * @param escape
     * @param input
     * @return
     */
    private static boolean detectEscape(String escape, String input) {
        if(input == null || input.length() < 3) {
            return false;
        }
        
        int idx = input.indexOf(escape);
        if(idx != -1) {
            for(String comment : COMMENTS) { 
                int commentIdx = input.indexOf(comment, idx);
                if(commentIdx != -1) {
                    return true;
                }
            }
        }
        return false;
    }
    
    public static boolean detectNonNumber(String input) {
        try {
            new BigDecimal(input);
            return false;
        } catch (NumberFormatException e) {
            return true;
        }
    }
    
    private static String[] COMMENTS = new String[] {
        "--",
        "#",
        "/*"
    };
    
    private static String[] KEY_WORDS = new String[] {
        "SELETCT",
        "FROM",
        "UPDATE",
        "DELETE"
    };
    
    private static String[] MISC = new String[]{
        " * ",  //
        "1=1", // tautology
        "(", //
        ")"//
    };
    
    private static String[] QUOTES = new String[] {
        "\"",
        "'"
    };
    
    private static String[] TERMINATORS = new String[] {
        ";",
        "\\g"
    };
    
    private static final List<String> SIGNATURES = new ArrayList<>();
    static {
        SIGNATURES.addAll(Arrays.asList(COMMENTS));
        SIGNATURES.addAll(Arrays.asList(KEY_WORDS));
        SIGNATURES.addAll(Arrays.asList(MISC));
        SIGNATURES.addAll(Arrays.asList(QUOTES));
        SIGNATURES.addAll(Arrays.asList(TERMINATORS));
    }
}
