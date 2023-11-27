const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input"),
        mobileNumberInput = document.getElementById("mobileNumber"),
        pinCode = document.getElementById("pinCode"),
        submitBtn = form.querySelector(".submit");

nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive')
        }else{
            form.classList.remove('secActive')
        }
    })
    let genderSelect = form.querySelector('select');
    if (genderSelect.value !== "") {
        form.classList.add('secActive');
    } else {
        form.classList.remove('secActive');
    }
    const mobileNumber = mobileNumberInput.value.trim();
    
    if (mobileNumber.length === 10 && /^\d+$/.test(mobileNumber)) {
        allInput.forEach(input => {
            if (input.value !== "") {
                form.classList.add('secActive');
            } else {
                form.classList.remove('secActive');
            }
        });
    }
})

submitBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive')
        }else{
            form.classList.remove('secActive')
        }
    })
    let genderSelect = form.querySelector('select');
    if (genderSelect.value !== "") {
        form.classList.add('secActive');
    } else {
        form.classList.remove('secActive');
    }
    const mobileNumber = mobileNumberInput.value.trim();
    
    if (mobileNumber.length === 10 && /^\d+$/.test(mobileNumber)) {
        allInput.forEach(input => {
            if (input.value !== "") {
                form.classList.add('secActive');
            } else {
                form.classList.remove('secActive');
            }
        });
    }

    if (pinCode.length === 6 && /^\d+$/.test(pinCode)) {
        allInput.forEach(input => {
            if (input.value !== "") {
                form.classList.add('secActive');
            } else {
                form.classList.remove('secActive');
            }
        });
    }
})

backBtn.addEventListener("click", ()=> form.classList.remove('secActive'))