import './movies-add-form.css'
function MoviesAddForum() {
  return (
    <div className="movies-add-form" >
     <h3>yangi kino qo'shish</h3>
     <form action="" className='add-form d-flex' >
      <input type="text"  className='form-control new-post-label' placeholder='Qanday kino' />
      <input type="number" className='form-control new-post-label' placeholder='Nechi martta korilgan' />
      <button type='submit' className='btn btn-outline-dark'>Qo'shish</button>
     </form>
    </div>
  )
}

export default MoviesAddForum
