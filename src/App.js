import FirstFormComponent from "./components/FirstFormComponent/FiestFormComponent";
import ButtonComponent from "./components/Button/Button";
function App() {
  return (
    <>
      <div>
        <section>
          <h1>personal data</h1>
          <FirstFormComponent></FirstFormComponent>
          <ButtonComponent text="Back"></ButtonComponent>
          <ButtonComponent text="Next"></ButtonComponent>
        </section>
        <section>
          <h2>access data</h2>
          <label htmlFor="">username</label>
          <input type="text" />
          <label htmlFor="">password</label>
          <input type="text" />
          <label htmlFor="">repeat password</label>
          <input type="text" />
          <button>back</button>
          <button>next</button>
        </section>
        <section>
          <h3>login</h3>
          <label htmlFor="">username</label>
          <input type="text" />
          <label htmlFor="">password</label>
          <input type="text" />
          <label htmlFor="">remember password</label>
          <input type="checkbox" />
          <p>incorrect pasword</p>
          <button>back</button>
          <button>acccess</button>
        </section>
      </div>
    </>
  );
}

export default App;
