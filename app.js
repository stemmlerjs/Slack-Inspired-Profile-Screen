angular.module('myApp',  ['ngAnimate'])
	.controller('MainController', MainController)
	.directive('profileModal', function() { //inject any dependencies we need (http, User, Popup etc)
		return {
			restrict: 'EA',
			templateUrl: 'modal.html',
			scope: true, // to be able to access parent scope through $parent
			link: function(scope, element, attrs){

				// Get User Information from Attributes
				if(!attrs.displaypicture) {
					// use default picture
					
				} else {
					scope.displayPicture = attrs.displaypicture;
				}
				scope.displayName = attrs.displayname;
				scope.tagLine = attrs.tagline;
				scope.location = attrs.location;

				// Close the Modal
				scope.close = function() {
					scope.$parent.toggleProfileModal();
				}
				
				scope.checkIfUserNameExists = function() {};
				scope.saveChanges = function() {
					scope.close();
				}
				scope.cancel = function() {
					scope.close();
				}

				// Edit Picture Functions and Variables

				scope.showEditProfilePicture = false;
				scope.picHoverIn = function() {
					scope.showEditProfilePicture = true;
				};

				scope.picHoverOut = function() {
					scope.showEditProfilePicture = false;
				};

				scope.editPictureDropDown = function() {
					alert('here we go');
				}

				scope.updateDisplayPicture = function() {
					// check out this method of saving pictures using AWS
					// http://stackoverflow.com/questions/22941535/mean-stack-file-uploads
				};
				
			}
		}
	});

	function MainController($scope) {
		$scope.showProfileModal = false;

		// Toggle Modal (used by directive as well)
		$scope.toggleProfileModal = function(){
			$scope.showProfileModal = !$scope.showProfileModal;
		}

	}
