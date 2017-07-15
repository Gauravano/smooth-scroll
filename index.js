
    function moveToSpecificLibrary(tag){
	var intervalId;

	window.addEventListener('wheel',function(event){
		if(intervalId!=null && event.deltaY < 0){
			clearInterval(intervalId);
		}
	});	

	var moveToSpecific = function(){
		console.log(this);
		console.log(this.id + " is called ");
		console.log(this.href.lastIndexOf('#'));


		 var m = this.href.lastIndexOf('#');
		 console.log(m);
		 
		 var id = this.href.slice(m+1);
		 var offsets = document.getElementById(id).getBoundingClientRect();

		var top = offsets.top;
		var left = offsets.left;
		 console.log("id "+id);
		 console.log("top "+top);
		var currentY = window.scrollY;
		var delta = currentY;

		if(intervalId !=null){
			clearInterval(intervalId);
		}

			console.log(window.scrollY);

			intervalId = setInterval(function(){
				var currentY = window.scrollY;
				console.log("scpos:  "+ currentY);
				window.scrollTo(0,delta);
				delta = delta + 1;

 				if(currentY >= top){
					clearInterval(intervalId);
				}

			},10);
		
	};
	
	tag.addEventListener('click',moveToSpecific);
};

var aTag = document.getElementsByTagName('a');

for(var i=0;i<aTag.length;i++){
	moveToSpecificLibrary(aTag[i]);
}