import { useRouteError, Link } from "react-router-dom"

export const NotFoundPage = () => {
  const error = useRouteError()
  return (
    <>
      <div>Not Found Page</div>
      <Link to="/">Volver al inicio</Link>
    </>
  )
}
