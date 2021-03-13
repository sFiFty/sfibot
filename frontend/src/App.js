import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <FirebaseDatabaseProvider firebase={firebase} {...config}>
          <div>
            <FirebaseDatabaseNode
              path="user_bookmarks/"
              limitToFirst={this.state.limit}
              // orderByKey
              orderByValue={"created_on"}
            >
              {d => {
                return (
                  <React.Fragment>
                    <pre>Path {d.path}</pre>
                    <pre style={{ height: 300, overflow: "auto" }}>
                      Value {s(d.value)}
                    </pre>
                    <button
                      onClick={() => {
                        this.setState(state => ({ limit: state.limit + 2 }));
                      }}
                    >
                      Load more
                    </button>
                  </React.Fragment>
                );
              }}
            </FirebaseDatabaseNode>
          </div>
        </FirebaseDatabaseProvider>
    </div>
  );
}

export default App;
