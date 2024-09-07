import { currencies } from '../data'
import { useCryptoStore } from '../store'


const CriptoSearchForm = () => {

    const cryptocurrency = useCryptoStore((state) => state.cryptocurrencies)
    return (
        <form action="" className="form">
            <label htmlFor="currency">Moneda:</label>
            <select
                name="currency"
                id="currency"
                className="field"
            >
                <option value={""}>-- Selecciona una opción --</option>
                {currencies.map(currency => (
                    <option key={currency.code} value={currency.code}>{currency.name}</option>
                ))}
            </select>
            <label htmlFor="criptocurrency">Criptomoneda:</label>
            <select
                name="criptocurrency"
                id="criptocurrency"
                className="field"
            >
                <option value={""}>-- Selecciona una opción --</option>
                {cryptocurrency.map(crypto => (
                    <option
                        key={crypto.CoinInfo.Name}
                        value={crypto.CoinInfo.Name}
                    >{crypto.CoinInfo.FullName}</option>
                ))}
            </select>
            <input type="submit" value="Consultar" />
        </form>
    )
}

export default CriptoSearchForm
