import { useSplitRates } from "../../../hooks/useSplitRates";
import PropTypes from "prop-types";
import { RATE_TIERS } from "../../../constants";

const TieredRates = ({ form }) => {
  // Hook establecer tasa especial vzla
  const { handleActualVzlaRate, tasasDivididas } = useSplitRates(form.tasaVenta);

  return (
    <div className="modulo-multi-tasa">
      <button type="button" onClick={handleActualVzlaRate}>
        <span>Establecer Tasa</span>
      </button>

      {RATE_TIERS.map((tier) => (
        <p key={tier.key}>
          {tier.amount} ⮕ {tasasDivididas[tier.key]}
        </p>
      ))}
    </div>
  );
};

TieredRates.propTypes = {
  form: PropTypes.shape({
    tasaVenta: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default TieredRates;
