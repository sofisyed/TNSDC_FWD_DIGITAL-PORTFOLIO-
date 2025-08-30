// Fade-in effect for sections
const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
sections.forEach(section => observer.observe(section));

// Profile photo upload
const uploadPhoto = document.getElementById('uploadPhoto');
const profilePic = document.getElementById('profilePic');

uploadPhoto.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profilePic.src = e.target.result; // Change the profile image dynamically
    };
    reader.readAsDataURL(file);
  }
});