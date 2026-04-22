import "./EmptyDashBoard.css";
import EmailCampaign from "../../assets/Email-campaign.png";
import moon from "../../assets/Path.png";
import profile from "../../assets/profile.png";
const EmptyDashboardPage = () => {
  return (
    <div className="app">
      
      <aside className="sidebar">
        <div className="logo"></div>

        <div className="sidebar-bottom">
        
            <img src={moon} alt="Theme Toggle" />
          <div className="avatar">
            <img src={profile} alt="Profile" />
          </div>
        </div>
      </aside>

      <main className="main">
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <h1 >Invoices</h1>
            <p>No invoices</p>
          </div>

          <div className="header-right">
            <div className="filter">Filter by status</div>

            <button className="btn">
              <span className="plus">+</span>
              New Invoice
            </button>
          </div>
        </header>

        {/* Empty State */}
        <section className="empty-state">
           
          <div className="illustration">
             <img src={EmailCampaign} alt="Email Campaign" />
          </div>

          <h2>There is nothing here</h2>
          <p>
            Create an invoice by clicking the <br />
            New Invoice button and get started
          </p>
        </section>
      </main>
    </div>
  );
};

export default EmptyDashboardPage;