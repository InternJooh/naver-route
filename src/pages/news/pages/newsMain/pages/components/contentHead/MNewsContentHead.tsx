import './style/mNewsContentHead.css'

interface contentProps {
  grey?: boolean;
}

export function MNewsContentHead({grey=false}:contentProps) {
  const buttonClass = grey ? 'grey-button' : '';
  const divClass = grey ? 'mNews-contentHead no-margin' : 'mNews-contentHead';
  const date = grey ? '9.25(월)' : '09.25(월)';

  return (
    <div className={divClass}>
      <div>{date}</div>
      <div className='mNews-contentHead-buttons'>
        <button className={buttonClass}>전체 언론사</button>
        <button className={buttonClass}>뉴스스탠드</button>
        <button className={buttonClass}>라이브러리</button>
      </div>
    </div>
  )
}