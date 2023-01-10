class Ground{
    constructor (x,y,w,h){
        var options = {
            isStatic: true
        }
        this.bodys = Bodies.rectangle(x,y,w,h,options)
        this.w = w;
        this.x = x;
        this.y = y;
        this.h = h;
        World.add(world,this.bodys);
    }
    display(){
        var pos = this.bodys.position;
        push ();
        rectMode (CENTER);
        strokeWeight(4)
        stroke (0,200,0);
        fill (0,0,0);
        rect(pos.x,pos.y,this.w,this.h);
        pop ();
    }
}