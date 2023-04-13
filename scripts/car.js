
import UnityEngine.UI;
import UnityEngine;
var vec:Vector3=Vector3();
var rep=1;
var count1=0;
 var bulding1:GameObject;
 var bulding2:GameObject;
 var targetspace3:GameObject;
 var rr:GameObject;
  var rr1:GameObject;
  var targetspace:GameObject;
	  var targetspace1:GameObject;
    var score:float=0;
     var textbox:Text;

function Update () {
  if(Time.timeScale==1)
    {
      textbox.text="Your score: "+ score;
      score++;
    }

vec.z+=20f*Time.deltaTime;
transform.position=vec;

var jay=vec.z%20;
var target_c=score%20;
var target_c1=score%30;
if(vec.z>40)
{
if(1>=jay&&0<=jay)
{
	if(vec.z>1000)

	{  vec.z+=45f*Time.deltaTime;
     Time.timeScale=1.15;
    vec.z=5;
		count1++;
	  Destroy(rr.gameObject);
}
}
}


if(Input.GetKeyDown("d"))
  {
          vec.x +=2f;
           transform.position = vec;

}
    if(Input.GetKeyUp("d"))
				 {
				 vec.x -=2f;
				 transform.position = vec;
			  }
     if (Input.GetKeyDown("a"))
          {
              vec.x -=2f;
						  transform.position = vec;
						}
						if(Input.GetKeyUp("a"))
						{
						vec.x +=2f;
						transform.position = vec;
						}






}
