package towson.cosc647;

public class SQLDetector {

    // for now, we just keep a list of signatures to test against.
    // in the future, maybe we will do this completely differently. who knows!?
    private static String[] signatures = new String[]{
        "--", // comment
        "#", // comment
        " * ", //
        ";", // statement terminator
        "1=1", // tautology
        "SELECT", //
        "FROM", //
        "(", //
        ")" //
    };

    /**
     *  Returns true if sql statements are detected within the input parameter
     *  @param input  The inupt string to test against
     *  @return true if there is sql being injected
     */
    public static boolean detect(String input){
        boolean detected = false;
        // for each signature, search for the signature in the input string 
        for(String token : SQLDetector.signatures){
            if(input.toLowerCase().indexOf(token.toLowerCase()) > -1){
                detected = true;
            }
        }
        return detected;
    }
}
