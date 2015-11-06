package towson.cosc647;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@Controller
@RequestMapping( value = "/api" )
class ApiController {

    @RequestMapping( value = "/detect", method = RequestMethod.POST )
    @ResponseBody
    public boolean detect_sql( @RequestBody String input ){
        return SQLDetector.detect(input);
    }

}
