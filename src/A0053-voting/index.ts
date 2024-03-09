type VotingOption = {
  numberOfVotes: number | 0;
  option: string;
};

export class Voting {
  constructor(public text: string) {}

  private _votingOptions: VotingOption[] = [];

  addOptions(voting: VotingOption): void {
    this._votingOptions.push(voting);
  }

  countOptions(votingIndex: number) {
    const selectIndex = this._votingOptions[votingIndex];

    if (!selectIndex) return;

    selectIndex.numberOfVotes += 1;
  }

  get votingOptions(): VotingOption[] {
    return this._votingOptions;
  }
}

export class VotingApp {
  private voting: Voting[] = [];

  addVoting(voting: Voting): void {
    this.voting.push(voting);
  }

  showVotes(): void {
    this.voting.forEach((vote) => {
      console.log(vote.text);
      vote.votingOptions.forEach((opt, index) => {
        console.log(`${index} - ${opt.option}: ${opt.numberOfVotes}`);
      });
    });
  }

  vote(index: number): void {
    const selectedVote = voting.votingOptions[index];

    if (!selectedVote) return console.log('Index dont exist');

    selectedVote.numberOfVotes += 1;
  }

  removeVote(index: number): void {
    voting.votingOptions[index].numberOfVotes -= 1;
  }
}

export const voting = new Voting(
  'Which one is your favorite programming language?',
);

voting.addOptions({ option: 'Java', numberOfVotes: 0 });
voting.addOptions({ option: 'TS', numberOfVotes: 0 });
voting.addOptions({ option: 'PY', numberOfVotes: 0 });
voting.addOptions({ option: 'Go', numberOfVotes: 0 });

export const votingApp = new VotingApp();

votingApp.vote(0);
votingApp.vote(0);
votingApp.vote(0);
votingApp.vote(0);
votingApp.vote(0);
votingApp.vote(0);
votingApp.vote(0);

votingApp.removeVote(0);

votingApp.addVoting(voting);

votingApp.showVotes();
//
