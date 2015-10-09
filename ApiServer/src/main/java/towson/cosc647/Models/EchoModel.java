package towson.cosc647;

public class EchoModel {
    private String stuff;
    public EchoModel(){}
    public EchoModel(String stuff){
        this.stuff = stuff;
    }
    public String getStuff(){
        return stuff;
    }
    public void setStuff(String stuff){
        this.stuff = stuff;
    }
}
