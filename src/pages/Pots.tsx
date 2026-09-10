
import Header from "../components/Pots/Header";
import PotsContainer from "../components/Pots/PotsContainer";
import WithdrawPotModal from "../components/Pots/WithdrawPotModal";

function Pots() {

  return <div className="space-y-8">
    <WithdrawPotModal/>
    <Header/>
    <PotsContainer/>
  </div>;
}

export default Pots;
