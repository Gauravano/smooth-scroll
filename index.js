
    function moveToSpecificLibrary(tag){
	var intervalId;

	window.addEventListener('wheel',function(event){
		if(intervalId!=null && event.deltaY < 0){
			clearInterval(intervalId);
		}
	});	

	var moveToSpecific = function(){
		console.log(this.id + " is called ");

		 var m = this.href.lastIndexOf('#');
		 
		 var id = this.href.slice(m+1);
		 var offsets = document.getElementById(id).getBoundingClientRect();

		var top = offsets.top;
		var left = offsets.left;
		 console.log("id "+id);
		 console.log("desired "+top);
		 console.log("current : "+window.scrollY);

		var delta = window.scrollY;
		var currentY = window.scrollY;
		console.log("currentY outside "+currentY);

		if(intervalId !=null){
			clearInterval(intervalId);
		}

			intervalId = setInterval(function(){
				
 				if(currentY >= top){
 					console.log("end");
					clearInterval(intervalId);
				}else{

					currentY = window.scrollY;
					console.log("currentPos:  "+ currentY);
					console.log("delta "+ delta);
					window.scrollTo(0,delta);
					delta = delta + 1;

				}

			},10);
		
	};
	
	tag.addEventListener('click',moveToSpecific);
};

var aTag = document.getElementsByTagName('a');

for(var i=0;i<aTag.length;i++){
	moveToSpecificLibrary(aTag[i]);
}