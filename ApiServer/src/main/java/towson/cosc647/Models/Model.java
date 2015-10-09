package towson.cosc647;

public class Model {
    private String name;
    public Model(){}
    public Model(String name){
        this.name = name;
    }
    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }
}
