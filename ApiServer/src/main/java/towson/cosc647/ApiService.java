package towson.cosc647;

import java.util.*;

class ApiService implements IApiService {
    private List<Model> models;
    public ApiService(){
        models = new LinkedList<Model>();
    }
    public List<Model> findAll(){
        return this.models;
    }
    public Model findOne(int id){ return this.models.get(id);}
    public Integer create(Model model){
        models.add(model);
        return models.indexOf(model);
    }
}
