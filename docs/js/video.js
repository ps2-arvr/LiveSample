
function webCam() {
		// �t�����g�i�C���j�J�����̏ꍇ	
		const medias = {audio : false, video : { facingMode: "user" }},
 		video  = document.getElementById("video");

		// ���A�i�o�b�N/�A�E�g�j�J�����̏ꍇ
		/* const medias = {audio : false, video : { facingMode: { exact: "environment" } }},
 		     video  = document.getElementById("video"); */
		
		navigator.getUserMedia(medias, successCallback, errorCallback);	

		}
function successCallback(stream) {
		  //video.srcObject = stream;
		video.src = window.URL.createObjectURL( stream );
		// ����̍Đ�
		peer.addStream(stream)
		video.play();
		}

function errorCallback(error) {
		  alert(error);
		}	
		
}