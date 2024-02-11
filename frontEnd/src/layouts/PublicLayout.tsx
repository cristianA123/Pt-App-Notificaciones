import { Outlet } from 'react-router-dom'

export const PublicLayout = () => {

  // const navigate = useNavigate()
  // const [firstLoading, setFirstLoading] = useState(false)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   // Validar si el usuario esta logueado y redirigir a la ruta correspondiente
  //   // navigate('/)
  // }, [])

  // if (!firstLoading) {
  //     return (<LoadingSpinner />)
  // }

  return (
    <main>
      <Outlet />
    </main>
  )
}

// export default PublicLayout