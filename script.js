document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
      skill.style.opacity = 0;
      setTimeout(() => {
        skill.style.opacity = 1;
        skill.style.transition = 'opacity 1s ease-in-out';
      }, 500);
    });
  });
