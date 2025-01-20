export default function EditProfile() {
  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      noValidate
    >
      <label className="popup__field">
        <input
          type="text"
          name="firstInput"
          id="user-name"
          class="popup__input popup__input_type_name"
          placeholder="Nome"
          minlength="2"
          maxlength="40"
          required
        />
        <span class="popup__input-error" data-input="firstInput"></span>
      </label>
      <label className="popup__field">
        <input
          type="text"
          name="secondInput"
          id="user-description"
          class="popup__input popup__input_type_description"
          placeholder="Sobre mim"
          minLength="2"
          maxLength="200"
          required
        />
        <span class="popup__input-error" data-input="secondInput"></span>
      </label>

      <button type="submit" class="popup__submit-button">
        SALVAR
      </button>
    </form>
  );
}
