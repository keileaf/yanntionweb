$(document).ready(function() {
    $('#modalImagen').on('show.bs.modal', function(event) {
      var image = $(event.relatedTarget); // La imagen que se hizo clic
      var imageUrl = image.attr('src'); // La URL de la imagen ampliada
      var modalImage = $(this).find('.modal-body img'); // La imagen dentro del modal
      
      modalImage.attr('src', imageUrl); // Asignar la URL de la imagen ampliada a la imagen dentro del modal
    });
  });