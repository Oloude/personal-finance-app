import { FaDollarSign } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import useFinanceState from "../../FinanceState";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

type EditPotModalProps = {
  closeModal: () => void;
  pot: {
    name: string;
    target: number;
    total: number;
    theme: string;
  };
};

const themes = [
  { title: "Green", color: "#277c78" },
  { title: "Yellow", color: "#f2cdac" },
  { title: "Cyan", color: "#82c9d7" },
  { title: "Navy", color: "#626070" },
  { title: "Red", color: "#c94736" },
  { title: "Purple", color: "#826cb0" },
  { title: "Turquoise", color: "#597c7c" },
  { title: "Brown", color: "#93674f" },
  { title: "Magenta", color: "#934f6f" },
  { title: "Blue", color: "#3f82b2" },
  { title: "Grey", color: "#97a0ac" },
];

function EditPotModal({ closeModal, pot }: EditPotModalProps) {
  const pots = useFinanceState((state) => state.data).pots;
  const handleEditPot = useFinanceState(state => state.handleEditPot)
  const potThemes = pots.map((pot) => pot.theme);

  const [formData, setFormData] = useState({
    name: pot.name,
    target: pot.target.toString(),
    theme: pot.theme,
  });
  const [formError, setFormError] = useState({
    name: "",
    target: "",
    theme: "",
  });

  const [showThemeDropdown, setShowThemeDropdown] = useState(false);
  let selectedPotTheme = themes.find(theme => theme.color === pot.theme) || themes[0]
  const [selectedTheme, setSelectedTheme] = useState(selectedPotTheme);

  function handleSelectedThemeChange(title: string, color: string) {
    setSelectedTheme({ title, color });
    setFormData((prev) => ({ ...prev, theme: color }));
  }

  function handleFormDataChange(propTitle: string, value: string) {
    setFormData((prev) => ({
      ...prev,
      [propTitle]: value,
    }));
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const error = { name: "", target: "", theme: "" };

    if (!formData.name.trim() || formData.name.trim().length < 3) {
      error.name = "Enter Pot Name";
    }

    if (!formData.target.trim() || Number(formData.target) < 1) {
      error.target = "Enter a valid target";
    }

    if (potThemes.includes(formData.theme)) {
      error.theme = "Select another theme color";
    }

    setFormError(error);
    if (error.name || error.target || error.theme) {
      return;
    }
    let potNew = {
      name: formData.name.trim(),
      target: Number(formData.target.trim()),
      theme: formData.theme,
      total: pot.total,
    };
    handleEditPot(pot, potNew)
    closeModal();
  }

  return (
    <div className="fixed inset-0 bg-black/10 z-30 backdrop-blur-xs h-screen flex items-center justify-center">
      <div className="max-w-140 rounded-xl p-8 flex flex-col gap-5 bg-white w-full">
        <header className="flex items-center justify-between">
          <h1 className="text-preset1 text-grey900 font-bold">Edit Pot</h1>
          <button onClick={closeModal} className="text-grey500">
            <IoCloseCircleOutline className="w-8 h-8" />
          </button>
        </header>
        <p className="text-preset4 text-grey500">
          If your saving targets change, feel free to update your pots.
        </p>
        <form
          onSubmit={handleFormSubmit}
          id="edit-modal"
          action=""
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-preset5 font-bold text-grey500">
              Pot Name
            </label>
            <input
              type="text"
              name="name"
              id=""
              value={formData.name}
              onChange={(e) =>
                handleFormDataChange(e.target.name, e.target.value)
              }
              placeholder="e.g. Rainy Days"
              className="px-5 py-3 border border-beige500 rounded-lg text-preset4 text-beige500 outline-none"
            />
            <span
              className={`text-preset5  self-end ${formData.name.length > 30 ? "text-red" : "text-grey500"}`}
            >
              {30 - formData.name.length } characters left
            </span>
            {formError.name && (
              <span className="text-xs text-red">{formError.name}</span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-preset5 font-bold text-grey500">
              Target
            </label>
            <div className="px-5 py-3 border border-beige500 rounded-lg text-preset4 text-beige500 flex items-center gap-4">
              <FaDollarSign className="w-4 h-4" />
              <input
                type="number"
                name="target"
                id=""
                value={formData.target}
                onChange={(e) =>
                  handleFormDataChange(e.target.name, e.target.value)
                }
                placeholder="e.g. 2000"
                className="outline-none flex-1"
              />
            </div>
            {formError.target && (
              <span className="text-xs text-red">{formError.target}</span>
            )}
          </div>
          <div className="flex flex-col gap-1 relative">
            <label htmlFor="" className="text-preset5 font-bold text-grey500">
              Theme
            </label>
            <button
              type="button"
              onClick={() => setShowThemeDropdown((prev) => !prev)}
              className="px-5 py-3 border border-beige500 rounded-lg text-preset4 text-beige500 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: selectedTheme.color }}
                ></div>
                <span className="text-preset4">{selectedTheme.title}</span>
              </div>
              <button type="button">
                <IoMdArrowDropdown className="w-4 h-4 text-grey900" />
              </button>
            </button>
            {showThemeDropdown && (
              <ThemeDropdown
                handleSelectedThemeChange={handleSelectedThemeChange}
                selectedPotThemes={potThemes}
              />
            )}
            {formError.theme && (
              <span className="text-xs text-red">{formError.theme}</span>
            )}
          </div>
        </form>
        <button
          form="edit-modal"
          className="rounded-lg bg-grey900 text-white font-bold text-preset4 h-13 w-full"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

type ThemeProps = {
  handleSelectedThemeChange: (title: string, color: string) => void;
  selectedPotThemes: string[];
};

function ThemeDropdown({
  handleSelectedThemeChange,
  selectedPotThemes,
}: ThemeProps) {
  return (
    <div className="px-5 py-3 flex flex-col gap-3 rounded-lg bg-white absolute left-0 bottom-16 shadow-dropdown divide-y divide-grey100 h-75 overflow-y-auto w-full">
      {themes.map(({ title, color }) => (
        <button
          type="button"
          disabled={selectedPotThemes.includes(color)}
          onClick={() => handleSelectedThemeChange(title, color)}
          className={`flex items-center gap-2 justify-between pb-3 group ${
            selectedPotThemes.includes(color) ? "text-grey500" : "text-grey900"
          }`}
        >
          <div className="flex items-center gap-3 group-disabled:opacity-45">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
            ></div>
            <span className="text-preset4">{title}</span>
          </div>
          {selectedPotThemes.includes(color) && (
            <span className="text-preset5">Already used</span>
          )}
        </button>
      ))}
    </div>
  );
}

export default EditPotModal;
