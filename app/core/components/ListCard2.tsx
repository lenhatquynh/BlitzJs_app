import { Image, Link } from "blitz"
import cover from "public/img/covers/cover.jpg"
import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  PropsWithoutRef,
  useEffect,
  useState,
} from "react"
import { filmModel } from "./filmModel"
export interface PageAPIProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  /** Field name. */
  page: number
}

export const ListCard2 = forwardRef<HTMLInputElement, PageAPIProps>(({ page }, ref) => {
  const [films, setfilms] = useState<filmModel[]>([])

  let film: any = async (slugName: string) => {
    const film = await fetch("https://ophim1.com/phim/" + slugName)
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
  const fetchData = async () => {
    const listFilm = await fetch("https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=" + page)
    const dataListFilm = await listFilm.json()
    let listSlugDataListFilm: filmModel[] = []
    for (var i = 0; i < 10; i++) {
      listSlugDataListFilm.push(await film(dataListFilm.items[i].slug))
    }
    setfilms(listSlugDataListFilm)
  }

  useEffect(() => {
    fetchData()
    console.log("datatype of film2: " + typeof films)
  }, [])

  return (
    <>
      {/* <!-- card --> */}
      {films.length > 0 ? (
        films.map((film) => (
          <div key={film.movie._id} className="col-6 col-sm-12 col-lg-6">
            <div className="card card--list">
              <Link href={`/details/${film.movie?.slug ?? ""}`}>
                <a className="card__cover">
                  <img src={film.movie?.thumb_url ?? ""} alt="" />
                  <span className="card__play">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                    </svg>
                  </span>
                </a>
              </Link>

              <div className="card__content">
                <h3 className="card__title">
                  <a href="#">{film.movie?.name ?? "helloworld"}</a>
                </h3>
                <span className="card__category">
                  <span className="highligh-text">{film.movie?.type ?? "null"}</span>
                </span>

                <div className="card__wrap">
                  <span className="card__rate"> {getRandomFloat(7, 10, 1)}</span>

                  <ul className="card__list">
                    <li>{film.movie?.quality}</li>
                    <li>{getRandomIntInclusive(16, 20)}+</li>
                  </ul>
                </div>

                <div className="card__description">
                  <p>
                    It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal distribution of letters, as opposed to using
                    Content here, content here, making it look like readable English.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
    </>
  )
})
