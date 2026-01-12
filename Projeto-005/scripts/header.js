const dropdownBtn = this.window.document.getElementById('dropdown-button') 
let dropdownList = this.window.document.getElementById('dropdown-list')

dropdownBtn.addEventListener('click', dropDown)
    function dropDown() {
        let status = getComputedStyle(dropdownList).display;

        if (status === 'none') {
            dropdownList.style.display = 'block'
        } else {
            dropdownList.style.display = 'none'
        }
    }