const Data = [
    {
        id: 'SDOCT',
        name: 'Spectral Domain OCT',
        image: 'images/oct.png',
        description: 'There is a revolutionary diagnostic technique that allows the ophthalmologist to see a detailed cross section of the layers of the retina and vitreous body. Disease is detected while the conventional view of the retina is still normal. Early glaucoma is revealed by a thinning of the nerve fiber layer, diabetic retinopathy by cystic thickening of the retina. Macular degeneration causes deformation to the deep layers of the retina. Abnormal membranes at the interface of the retina and vitreous are revealed before they distort vision.'
    },
    {
        id: 'FF',
        name: 'Floaters and Flashes',
        image: 'images/floaters.png',
        description: 'These are usually caused by the collapse of the vitreous body in mid life which is entirely normal. Rarely, it can tear the retina resulting in a vision threatening retinal detachment. When discovered before the retina detaches, these tears are easily sealed with laser light.'
    },
    {
        id: 'DE',
        name: 'Dry Eyes',
        image: 'images/dryeye.png',
        description: 'Very common, especially in women; artificial tears usually suffice. Causing the body\'s own tears to remain longer on the eye is also effective and convenient. Dissolvable plugs are placed in a small lower lid opening that normally drains away tears. This takes only a few seconds. If the symptoms of dryness, grittiness and irritation are improved, a non-dissolvable plug is placed later.'
    },
    {
        id: 'Cataract',
        name: 'Cataract',
        image: 'images/cataract.png',
        description: 'A frequent cause of glare, especially when driving at night. Modern cataract surgery is much less intrusive than in the past. Before deciding on surgery the need for glasses must be evaluated as well as the presence of macular degeneration. A significant cataract will usually cause vision to drop markedly when a glare tester is used in the office. Vision will improve when tested with a pinhole, indicating that behind the cataract lies a healthy retina and a good surgical result can be expected.'
    },
    {
        id: 'DRD',
        name: 'Diabetic Retinal Damage',
        image: 'images/diabeticret.png',
        description:'Public health doctors recommend that the retina of every diabetic be examined once a year and any significant bleeding that occurs be considered for laser treatment. Spectral domain OCT shows all the retinal layers in both cross section and in three dimensions enabling us to see previously invisible processes like subtle swelling of the retina. This technique is useful in macular degeneration, and glaucoma as well.'
    },
    {
        id: 'Glaucoma',
        name: 'Glaucoma',
        image: 'images/vishnuglauc.png',
        description: 'Progressive damage to the optic nerve with loss of peripheral vision is the hallmark of this disease. Elevated eye pressure is often present but not always. Treatment involves lowering eye pressure with one or more of four classes of eye drops, using light from a tiny laser beam to repair the obstructed drains within the eye or, rarely, bypassing the obstructed drainage system surgically. Fortunately we have several optical methods to measure optic nerve damage and establish progression. Side vision is tested with white light, colored light or motion. Pressure is measured after an anesthetic drop. No air puff is used.'
    },
    {
        id: 'MD',
        name: 'Macular Degeneration',
        image: 'images/macdegen.png',
        description: 'More and more common as people age. Macular degeneration comes in two forms. Dry macular degeneration is a slow process which damages the retinal cells that give us sharp vision, especially for reading. Wet macular degeneration usually occurs suddenly with bleeding into a macula already afflicted with dry macular degeneration. Prevention involves vitamin therapy for dry macular degeneration. Wet macular degeneration requires use of medications that close off the vessels that are bleeding into the macula. Diagnosis is made by visualizing the macula by Spectral Domain OCT, which allows visualization of all retinal layers in cross section. '
    },
    {
        id: 'LVS',
        name: 'Low Vision Services',
        image: 'images/lowvision.png',
        description: 'A fine local resource for those who have poor vision even after the best glasses and medical treatment is the Low Vision Service at UC Berkeley. Patients with Macular Degeneration or any condition which cannot be corrected to their satisfaction should arrange for a low vision evaluation. Generally, devices are dispensed which enlarge images so that they fall on the part of the retina that still sees well. A simple example is a proper magnifier and good illumination. A more elaborate example is a video reading machine in which a book is laid under a camera and read on a TV screen. The art is in diminishing unwanted distortions and making sure the image is at the correct distance. The examination costs $274 and the devices are extra. This service is sometimes covered by insurance. There is a detailed form that is completed by the ophthalmologist who will make the referral.'
    }
]

let common = document.getElementById('common')
let section = document.createElement('div')

Data.forEach(element => {
    let container = document.createElement('div')
    container.setAttribute('class', 'condCont')

    let anchor = document.createElement('a')
    anchor.setAttribute('name', element.id)
    let header = document.createElement('h3')
    header.setAttribute('class', 'title')
    header.textContent = element.name
    anchor.appendChild(header)

    let image = document.createElement('img')
    image.setAttribute('src', element.image)
    image.setAttribute('class', 'condImg')
    image.setAttribute('id', element.id)

    let description = document.createElement('p')
    description.setAttribute('class', 'description display')
    description.textContent = element.description

    let button = document.createElement('button')
    button.setAttribute('class', 'condButton')
    button.textContent = 'Show Description'
    button.addEventListener('click', () => {
        let classes = description.classList
        let result = classes.toggle('display')

        if (result) {
            description.style.display = 'none'
            button.textContent = 'Show Description'
        } else {
            description.style.display = 'block'
            button.textContent = 'Hide Description'
        }
    })

    container.appendChild(anchor)
    container.appendChild(image)
    container.appendChild(description)
    container.appendChild(button)
    section.appendChild(container)
})

common.appendChild(section)
