import { MdArrowRight } from "react-icons/md";
import { useNavigate } from "react-router";
import useFinanceState from "../../FinanceState";

function Pots() {
  const navigate = useNavigate();
  const financeData = useFinanceState((state) => state.data);

  const pots = financeData.pots;

  let potsTotal = pots.reduce((acc, pot) => (acc += pot.total), 0);
  let firstFourPots = pots.slice(0, 4);

  return (
    <section className="rounded-xl px-5 py-6 md:px-8 md:py-8 flex flex-col gap-5 bg-white">
      <header className="flex items-center justify-between gap-3">
        <h3 className="text-preset2 font-bold text-grey900">Pots</h3>
        <button
          onClick={() => navigate("/pots")}
          className="flex items-center gap-3 text-preset4 text-grey500"
        >
          See Details <MdArrowRight className="w-5 h-5" />
        </button>
      </header>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-5 lg:grid-cols-2">
        <div className="md:col-span-2 p-4 flex items-center gap-4 bg-beige100 rounded-xl lg:col-span-1">
          <img src="/icon-pot.svg" alt="" />
          <div className="flex flex-col gap-2.75">
            <h4 className="text-preset4 text-grey500">Total Saved</h4>
            <p className="text-preset1 text-grey900 font-bold">${potsTotal}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:col-span-3 lg:col-span-1">
          {firstFourPots.map((pot) => (
            <div key={pot.name} className={`flex items-center gap-4 `}>
              <div
                className="h-full rounded-full w-1"
                style={{ backgroundColor: pot.theme }}
              ></div>
              <div className="flex flex-col gap-1">
                <h4 className="text-preset4 text-grey500">{pot.name}</h4>
                <p className="text-preset4 font-bold text-grey900">
                  ${pot.total}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pots;
