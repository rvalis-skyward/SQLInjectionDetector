package towson.cosc647;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@Controller
@RequestMapping( value = "/api" )
class ApiController {

    IApiService service = new ApiService();

    @RequestMapping( method = RequestMethod.GET )
    @ResponseBody
    public List< Model > findAll(){
        return service.findAll();
    }

    @RequestMapping( value = "/{id}", method = RequestMethod.GET )
    @ResponseBody
    public Model findOne( @PathVariable( "id" ) Integer id ){
        return service.findOne( id );
    }

    @RequestMapping( method = RequestMethod.POST )
    @ResponseBody
    public Integer create( @RequestBody Model model ){
        return service.create( model );
    }

    @RequestMapping( value = "/echo", method = RequestMethod.POST )
    @ResponseBody
    public EchoModel echo( @RequestBody EchoModel stuff ){
        return stuff;
    }

}
