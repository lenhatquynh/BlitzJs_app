import { Image, BlitzPage, Head, useParam } from "blitz"
import Layout from "app/core/layouts/Layout"
import cover from "public/img/covers/cover.jpg"

import { ListCard2 } from "app/core/components/ListCard2"
import { ComponentPropsWithoutRef, PropsWithoutRef, Suspense, useEffect, useState } from "react"
import { filmModel } from "app/core/components/filmModel"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Detail: BlitzPage = () => {
  const detailSlugName = useParam("detailId", "string")
  // console.log("test param: " + detailSlugName)
  // console.log("test param type: " + typeof detailSlugName)

  const [films, setfilms] = useState<filmModel[]>([])

  let film: any = async (slugName: string) => {
    let name: string = slugName ?? "ngoi-truong-xac-song"
    const film = await fetch("https://ophim1.com/phim/" + name)
    const dataFilm = await film.json()
    return dataFilm
  }
  function getRandomFloat(min: number, max: number, decimals: number) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals)
    return parseFloat(str)
  }
  function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function splitString(str: string) {
    let text: string = str.substr(3, str.length - 7)
    let res1: string = text.replace(/<p>/g, "")
    let res2: string = res1.replace("</p>", "")
    return res2
  }
  const fetchData = async () => {
    let listSlugDataListFilm: filmModel[] = []

    listSlugDataListFilm.push(await film(detailSlugName))

    setfilms(listSlugDataListFilm)
  }

  useEffect(() => {
    fetchData()
    console.log("datatype of film: " + typeof films)
  }, [detailSlugName])
  return (
    <>
      <Head>
        <title>Details</title>
      </Head>

      {films.length > 0 ? (
        films.map((film) => (
          <section key={film.movie._id} className="section details custom-bg-detail">
            {/* <!-- details background --> */}
            <div className="details__bg"></div>
            {/* <!-- end details background --> */}

            {/* <!-- details content --> */}
            <div className="container">
              <div className="row">
                {/* <!-- title --> */}
                <div className="col-12">
                  <h1 className="details__title">{film.movie?.name ?? "helloworld"}</h1>
                </div>
                {/* <!-- end title --> */}

                {/* <!-- content --> */}
                <div className="col-12 col-xl-11">
                  <div className="card card--details card--series">
                    {/* <!-- card cover --> */}
                    <div className="card__cover">
                      <img src={film.movie?.thumb_url ?? ""} alt="" />
                    </div>
                    {/* <!-- end card cover --> */}

                    {/* <!-- card content --> */}
                    <div className="card__content">
                      <div className="card__wrap">
                        <span className="card__rate"> {getRandomFloat(7, 10, 1)}</span>

                        <ul className="card__list">
                          <li>{film.movie?.quality}</li>
                          <li>{getRandomIntInclusive(16, 20)}+</li>
                        </ul>
                      </div>

                      <ul className="card__meta">
                        <li>
                          <span>Genre:</span>{" "}
                          <span className="highligh-text">{film.movie?.type ?? "null"}</span>
                        </li>
                        <li className="highligh-text">
                          <span>Release year:</span> {film.movie?.year ?? 2022}
                        </li>
                        <li className="highligh-text">
                          <span>Running time:</span> {film.movie?.time ?? "120"}
                        </li>
                        <li>
                          <span>Country:</span>{" "}
                          <span className="highligh-text">
                            {film.movie?.country[0]?.name ?? "ASIA"}
                          </span>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- end card content --> */}
                  </div>
                </div>
                {/* <!-- end content --> */}

                {/* <!-- player --> */}
                <div className="col-12 col-lg-6">
                  <iframe
                    className="embed-video "
                    src={film.episodes[0]?.server_data[0]?.link_embed}
                    allowFullScreen={true}
                  ></iframe>
                </div>
                {/* <!-- end player --> */}

                {/* <!-- accordion --> */}
                <div className="col-12 col-lg-6">
                  <div className="accordion custom-scrolll-box" id="accordion">
                    {splitString(film.movie?.content)}
                  </div>
                </div>
                {/* <!-- end accordion --> */}
              </div>
            </div>
            {/* <!-- end details content --> */}
          </section>
        ))
      ) : (
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {/* <!-- end card --> */}
      {/* <!-- end details --> */}

      {/* <!-- content --> */}
      <section className="content">
        <div className="content__head">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* <!-- content title --> */}
                <h2 className="content__title">You may also like...</h2>
                {/* <!-- end content title --> */}
              </div>
            </div>
          </div>
        </div>

        {/* <!-- here --> */}
        <div className="container">
          {/* <!-- content tabs --> */}
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="tab-1"
              role="tabpanel"
              aria-labelledby="1-tab"
            >
              <div className="row row--grid">
                {/* <!-- card --> */}
                <Suspense fallback={<div>Loading...</div>}>
                  <ListCard2 page={6} />
                </Suspense>
                {/* <!-- end card --> */}
              </div>
            </div>
          </div>
          {/* <!-- end content tabs --> */}
        </div>
        {/* <!-- end here --> */}
      </section>
      {/* <!-- end content --> */}

      {/* <!-- end children --> */}
    </>
  )
}

Detail.suppressFirstRenderFlicker = true
Detail.getLayout = (page) => <Layout title="Details">{page}</Layout>

export default Detail
