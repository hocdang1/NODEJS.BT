function showTab(tab) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach((content) => content.classList.add('hidden'));
    // Remove active state from tabs
    document.getElementById('tab-booking').classList.remove('border-[#487254]', 'text-[#487254]');
    document.getElementById('tab-confirmation').classList.remove('border-[#487254]', 'text-[#487254]');

    // Show selected tab and set active state
    if (tab === 'booking') {
        document.getElementById('booking-section').classList.remove('hidden');
        document.getElementById('tab-booking').classList.add('border-[#487254]', 'text-[#487254]');
    } else {
        document.getElementById('confirmation-section').classList.remove('hidden');
        document.getElementById('tab-confirmation').classList.add('border-[#487254]', 'text-[#487254]');
    }
}