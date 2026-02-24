//class
class Student{
    constructor()
    {
        this.code=100;
        this.name="Ram";
    }
    setData(code,name)
    {
        this.code=code;
        this.name=name;
    }
    showData()
    {
        console.log("Code:" + this.code);
        console.log("Name:"+ this.name);
    }
}

const ramesh=new Student();
ramesh.showData();
code=200;
name="Rajesh";
ramesh.setData(code,name);
ramesh.showData();