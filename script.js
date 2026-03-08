document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('.card');
  const pupils = document.querySelectorAll('.pupil');
  const character = document.querySelector('.character');

  document.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - cardCenterX) / rect.width;
    const deltaY = (e.clientY - cardCenterY) / rect.height;

    pupils.forEach((pupil) => {
      const moveX = Math.max(-3, Math.min(3, deltaX * 8));
      const moveY = Math.max(-2, Math.min(2, deltaY * 6));
      pupil.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
    });
  });

  document.addEventListener('mouseleave', () => {
    pupils.forEach((pupil) => {
      pupil.style.transform = 'translate(-50%, -50%)';
    });
    character.style.transform = '';
  });

  character.addEventListener('click', () => {
    character.style.animation = 'none';
    character.style.transform = 'scale(1.15)';
    setTimeout(() => {
      character.style.transform = '';
      character.style.animation = 'float 4s ease-in-out infinite';
    }, 200);
  });
});
