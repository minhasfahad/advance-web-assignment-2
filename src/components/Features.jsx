import React from 'react'

const Features = () => {
  return (
    <section className="features">
          <div className="card">
            <i class="fas fa-route fa-1x text-red"></i>
            <h3>Adventure</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim et
              beatae laborum soluta facere, mollitia rem impedit laudantium
              ipsam! Suscipit porro praesentium perspiciatis quaerat doloremque
              vitae architecto nisi neque hic?
            </p>
          </div>
          <div style={{background: "linear-gradient(to right, rgba(211, 80, 80, 1), rgba(145, 50, 50, 1))"
}} className="card">
            <i class="fas fa-strikethrough fa-1x"></i>
            <h3>Less Price</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              libero dolore velit quam aperiam repellendus fugit minus ducimus
              alias est repudiandae ipsam, voluptate veniam similique, et qui,
              adipisci animi? Quia!
            </p>
          </div>
          <div className="card">
            <i class="fas fa-user-check fa-1x text-red"></i>
            <h3>Experience</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              asperiores earum velit consectetur autem voluptas iusto aspernatur
              quos fugiat ut, quod ex quis molestiae recusandae? Repudiandae
              praesentium cupiditate ex saepe!
            </p>
          </div>
      </section>
  )
}

export default Features
