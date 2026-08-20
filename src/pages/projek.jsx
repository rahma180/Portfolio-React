import Card from "../components/card"

const project = [
    {image: "https://www.4visionmedia.com/storage//filemanager/Jasa%20Pembuatan%20website%20Company%20Profile.png", alt: "Company Profile", category: "Website", name: "Company Profile"},
    {image: "https://www.total-erp.com/wp-content/uploads/2023/03/banner-cw-2.png", alt: "Inventaris Laboratorium", category: "Website", name: "Inventaris Laboratorium"},
    {image: "https://rricoid-assets.obs.ap-southeast-4.myhuaweicloud.com/berita/Tanjungpinang/o/1752725705421-ILUSTRASI_KBRN/cduexzyzglfwa3v.jpeg", alt: "Bank Sampah", category: "Website", name: "Bank Sampah"},
    {image: "https://machung.ac.id/wp-content/uploads/2021/12/1-5.jpg", alt: "Portfolio", category: "Website", name: "Portfolio"},
    {image: "https://s3-alpha.figma.com/hub/file/1861166018/3c87fc6f-081e-425b-a58e-f31725a0ed5f-cover.png", alt: "Company Profoile", category: "Desain", name: "Company Profile"},
    {image: "https://figmaelements.com/wp-content/uploads/2024/07/research-center-figma-website-template.png", alt: "Inventaris Laboratorium", category: "Desain", name: "Inventaris Laboratorium"},
    {image: "https://www.buildwithangga.com/storage/assets/portfolio/tFiQpJz1WSbeDJVIQ3GViZYE1JdK6kyD3IcVH6rU.png", alt: "Bank Sampah", category: "Desain", name: "Bank Sampah"},
    {image: "https://blog.digitalskola.com/wp-content/uploads/2025/08/perbedaan-cv-dan-portofolio-1024x576.webp", alt: "Portfolio", category: "Desain", name: "Portfolio"},
]

function Projek(){
    return(
        <section className="project" id="project">
            <h1>Projek</h1>
            <div className="card">
                {project.map((item, index) => (
                    <Card
                        key={index}
                        image={item.image}
                        alt={item.alt}
                        category={item.category}
                        name={item.name}
                    />
                ))}
            </div>
        </section>
    )
}
export default Projek