document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
    
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('email').value.trim();
      const comment = document.getElementById('comment').value.trim();
      
      if (!name || !phone || !email || !comment) {
        alert('Por favor complete todos los campos');
        return;
      }
      
      if (!validateEmail(email)) {
        alert('Por favor ingrese un email válido');
        return;
      }
      
      if (!validatePhone(phone)) {
        alert('Por favor ingrese un número de teléfono válido');
        return;
      }
      
      
      console.log('Datos del formulario:', {
        name,
        phone,
        email,
        comment
      });
      
      alert('Mensaje enviado con éxito. Gracias por contactarme!');
      contactForm.reset();
    });
  }
  
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  function validatePhone(phone) {
    
    const re = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return re.test(phone);
  }
});