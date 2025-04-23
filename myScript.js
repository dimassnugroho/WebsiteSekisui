function scrollSlider(direction) {
    const container = document.getElementById("productSlider");
    const scrollAmount = 260; // Adjust based on card width + gap
    container.scrollBy({
      left: scrollAmount * direction,
      behavior: 'smooth'
    });
  }

  const slider = document.getElementById('cardSlider');
  const nextBtn = document.getElementById('nextBtnRec');
  const prevBtn = document.getElementById('prevBtnRec');

  nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: 320, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -320, behavior: 'smooth' });
  });

  function showJobDetails(jobType) {
    // Hide all job details
    document.querySelectorAll('[id$="-details"]').forEach(el => {
        el.classList.add('hidden');
    });
    
    // Remove border from all job cards
    document.querySelectorAll('[id$="-card"]').forEach(el => {
        el.classList.remove('border-blue-500', 'border-2');
    });
    
    // Show selected job details
    const selectedDetails = document.getElementById(jobType + '-details');
    if (selectedDetails) {
        selectedDetails.classList.remove('hidden');
    }
    
    // Add border to active job card
    const selectedCard = document.getElementById(jobType + '-card');
    if (selectedCard) {
        selectedCard.classList.add('border-blue-500', 'border-2');
    }
}

// Set default active job on page load
document.addEventListener('DOMContentLoaded', function() {
    showJobDetails('fullstack');
});

const toggleBtn = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');

  toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');
  });