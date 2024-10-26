interface LogoProps {
  text?: boolean
  min?: boolean
}

export function Logo({ text = true, min = false }: LogoProps) {
  const width = min
    ? 'w-14'
    : 'w-24'
  const container = text
    ? 'flex gap-5 p-10'
    : ''
  return (
    <div className={container}>
      <img src="logo.svg" alt="logo" className={width} />
      {
        text &&
          <div className="flex flex-col gap-1">
            <div className="title-md">
              Marketplace
            </div>
            <div>
              Painel de Vendedor
            </div>
          </div>
      }
    </div>
  )
}
