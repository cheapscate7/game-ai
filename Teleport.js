#pragma strict
var target[] : Transform;

function Start() {
    
    // target[] gameobjects  = GameObject.FindObjectsWithTag("teleport");
}
 
function Update () {
 
}
 
function OnTriggerEnter (col : Collider) {
 
        if(col.gameObject.tag == "teleport") {
                this.transform.position = target.position;
        }
}