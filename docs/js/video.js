
function webCam() {
		// フロント（イン）カメラの場合	
		const medias = {audio : false, video : { facingMode: "user" }},
 		video  = document.getElementById("video");

		// リア（バック/アウト）カメラの場合
		/* const medias = {audio : false, video : { facingMode: { exact: "environment" } }},
 		     video  = document.getElementById("video"); */
		
		navigator.getUserMedia(medias, successCallback, errorCallback);	

		}
function successCallback(stream) {
		  //video.srcObject = stream;
		video.src = window.URL.createObjectURL( stream );
		// 動画の再生
		peer.addStream(stream)
		video.play();
		}

function errorCallback(error) {
		  alert(error);
		}	
		
}