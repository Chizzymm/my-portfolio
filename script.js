// Typing Effect for Home Section (only active on index.html)
if (document.getElementById("typing-text")) {
    document.addEventListener("DOMContentLoaded", function() {
        const text = "Hi, I'm Chizzy";
        const typingText = document.getElementById("typing-text");
        let index = 0;

        function type() {
            if (index < text.length) {
                typingText.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 150);
            }
        }

        type();
    });
}
