export default function Contact() {
    
    const handleContactClick = () => {
        const emailAddress = "kdani7777@yahoo.com";
        const subject = "Message for Kush"
        const mailToLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
        window.open(mailToLink);
    }

    return (
        <button 
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 hover:bg-gradient-to-r shadow-lg text-white py-2 px-4 rounded-full"
            onClick={handleContactClick}
        >
            get in touch
        </button>
    );
}