class ContactForm {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.statusText = document.getElementById("form-status");
        this.submitBtn = this.form.querySelector("button");

        // KVKK elemanları
        this.kvkkCheckbox = this.form.querySelector("#kvkk-consent");
        this.kvkkLink = this.form.querySelector("#kvkk-link");
        this.kvkkText = this.form.querySelector("#kvkk-text");

        emailjs.init("HBwpLQvycGYMhsAJ4");

        this.bindEvents();
    }

    bindEvents() {
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));

        if (this.kvkkLink) {
            this.kvkkLink.addEventListener("click", () => this.toggleKvkkText());
        }
    }

    toggleKvkkText() {
        this.kvkkText.style.display =
            this.kvkkText.style.display === "block" ? "none" : "block";
    }

    handleSubmit(e) {
        e.preventDefault();

        // 🔴 KVKK KONTROLÜ
        if (!this.kvkkCheckbox.checked) {
            this.statusText.textContent = "Lütfen KVKK onayını verin.";
            this.statusText.style.color = "red";
            return;
        }

        this.submitBtn.disabled = true;
        this.statusText.textContent = "Gönderiliyor...";
        this.statusText.style.color = "#4da6ff";

        this.form.querySelector("#time").value =
            new Date().toLocaleString("tr-TR");

        emailjs.sendForm(
            "service_tyig8tn",
            "template_bc1os6h",
            this.form
        )
            .then(() => this.onSuccess())
            .catch(() => this.onError())
            .finally(() => this.onFinally());
    }

    onSuccess() {
        this.statusText.textContent = "Mesaj başarıyla gönderildi ✔";
        this.statusText.style.color = "#4da6ff";
        this.form.reset();
        this.kvkkText.style.display = "none";
    }

    onError() {
        this.statusText.textContent = "Bir hata oluştu. Lütfen tekrar deneyin.";
        this.statusText.style.color = "red";
    }

    onFinally() {
        this.submitBtn.disabled = false;
    }
}

new ContactForm("contact-form");
