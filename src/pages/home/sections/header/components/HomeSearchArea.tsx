import "./styles/HomeSearchArea.css"

export function HomeSearchArea() {
  return (
    <div className="search-area">
      <button className="search-naver"></button>
      <input className="search-input" type="text"></input>
      <button className="search-keyboard"></button>
      <button className="search-autocomplete"></button>
      <button className="search-button"><span></span></button>
    </div>
  )
}