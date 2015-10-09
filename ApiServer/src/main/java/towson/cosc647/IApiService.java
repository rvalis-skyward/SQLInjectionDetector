package towson.cosc647;

import java.util.*;

interface IApiService {
    public List<Model> findAll();
    public Model findOne(int id);
    public Integer create(Model model);
}
