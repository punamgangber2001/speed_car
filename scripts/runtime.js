
import UnityEngine.UI;
import System.Collections;
import System.Collections.Generic;

import UnityEngine;
var vec:Vector3=Vector3();
var rep=1;
var count1=0;
var countbuld=1;
 var bulding1:GameObject;
 var bulding2:GameObject;
 var targetspace3:GameObject;
 var rr:GameObject;
  var rr1:GameObject;
  var targetspace:GameObject;
	  var targetspace1:GameObject;
    
     var textbox:Text;

function Update () {
	countbuld++;


vec.z+=24f*Time.deltaTime;
transform.position=vec;
var target_c=score%20;
var target_c1=score%30;
if(vec.z>40)
{
if(countbuld%10==0)
{
	if(vec.z>1000)
	{
		vec.z=5;
		count1++;
	  Destroy(rr.gameObject);
}
else if(count1==0 && Time.timeScale==1)
{
   if(rep<10)
	 {
   if(rep%2==0){
  Instantiate(rr,targetspace3.transform.position,targetspace3.transform.localRotation);}
	else if(rep%1.5==0){
		targetspace3.transform.position.x+=5;
		Instantiate(rr1,targetspace3.transform.position,targetspace3.transform.localRotation);
			targetspace3.transform.position.x-=5;
	}
}

else if((rep>10&&rep<20) || (rep>30&&rep<40))
{
if(rep%2==0){
Instantiate(rr,targetspace3.transform.position,targetspace3.transform.localRotation);}
else {
 targetspace3.transform.position.x+=5;
 Instantiate(rr1,targetspace3.transform.position,targetspace3.transform.localRotation);
	 targetspace3.transform.position.x-=5;
}
}
 else if (rep>20&&rep<30) {
		if(rep%1.5==0){
	 Instantiate(rr,targetspace3.transform.position,targetspace3.transform.localRotation);}
	 else if(rep%2==0){
		 targetspace3.transform.position.x+=5;
		 Instantiate(rr1,targetspace3.transform.position,targetspace3.transform.localRotation);
			 targetspace3.transform.position.x-=5;
	 }

 }


Instantiate(bulding2,targetspace.transform.position,targetspace.transform.localRotation);
Instantiate(bulding1,targetspace1.transform.position,targetspace1.transform.localRotation);

rep++;
	}
}
}






}
