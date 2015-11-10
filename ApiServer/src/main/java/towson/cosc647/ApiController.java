package towson.cosc647;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@Controller
@RequestMapping( value = "/api/detect" )
class ApiController {

    @RequestMapping(method = RequestMethod.POST )
    @ResponseBody
    public boolean detect_sql( @RequestBody String input ){
        return SQLDetector.detectAnything(input);
    }
    
    @RequestMapping( value = "/quote", method = RequestMethod.POST )
    @ResponseBody
    public boolean detect_quote( @RequestBody String input ){
        return SQLDetector.detectQuoteEscape(input);
    }

    @RequestMapping( value = "/doublequote", method = RequestMethod.POST )
    @ResponseBody
    public boolean detect_doubleQuote( @RequestBody String input ){
        return SQLDetector.detectDoubleQuoteEscape(input);
    }
    
    @RequestMapping( value = "/number", method = RequestMethod.POST )
    @ResponseBody
    public boolean detect_NonNumber( @RequestBody String input ){
        return SQLDetector.detectNonNumber(input);
    }
}
