import './NavigationBar.css'
export function NavigationBar(){
    return <div className="NavigationBar">
        <MenuHamburgerIcon/>
        <a className='iconeg1' href="https//G1.com.br">g1</a>
        
        <div className='CampoBuscar'>
          <div>
            <SearchIcon/>
          </div>
          <div>
          <input className='buscar' type='text' placeholder='BUSCAR' aria-label='Pesquisar'></input>
          </div>
        </div>
    </div>
}

const MenuHamburgerIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6H20M4 12H20M4 18H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const SearchIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11"
        cy="11"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="16.5"
        y1="16.5"
        x2="21"
        y2="21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );