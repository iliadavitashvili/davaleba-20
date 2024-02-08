export default function card(name,email,address){


    return `
        <div class="card">
            <h1 class="name">${name}</h1>
            <div class="contact-info-wrapper">
                <p class="email" >Email: ${email}</p>
                <p class="address" >Address: ${address.city} city, ${address.street} street</p>
            </div>
        </div>

    `
}