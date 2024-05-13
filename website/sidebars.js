export default {
  tutorial: [
    {
      type: "category",
      label: "Getting Started",
      className: "category-getting-started",
      collapsible: false,
      items: [
        "getting-started/how-ckb-works",
        "getting-started/quick-start",
        "getting-started/devtool",
      ]
    },
    {
      type: "category",
      label: "DApp Tutorials",
      className: "category-dapp",
      collapsible: false,
      items: [
        "dapp/transfer-ckb",
        "dapp/write-message",
        "dapp/create-token",
        "dapp/create-dob",
      ]
    },
    {
      type: "category",
      label: "Scripts (Smart Contracts)",
      className: "category-script",
      collapsible: false,
      items: [
        "script/intro-to-script",
        "script/program-language-for-script",
        "script/minimal-script",
        "script/js-script",
        "script/common-script-error-code",
      ]
    },
    {
      type: "category",
      label: "Integrate Wallets",
      className: "category-integrate-wallets",
      collapsible: false,
      items: [
        "integrate-wallets/intro-to-wallets",
        "integrate-wallets/joyid",   
      ]
    },
    {
      type: "category",
      label: "Network & Nodes",
      className: "category-node",
      collapsible: false,
      items: [
          "node/rpcs",
          "node/run-mainnet-node",
          "node/run-testnet-node",
          "node/run-devnet-node",
          "node/run-public-rpc-node",
      ]
    },
    {
      type: "category",
      label: "Mining",
      className: "category-mining",
      collapsible: false,
      items: [
        "mining/algorithm-difficulty",
        "mining/rewards",
        "mining/cost-and-profit",
        "mining/risks",
        "mining/hardware",
        "mining/guide",
        "mining/info-stats",
      ]
    },
    {
      type: "category",
      label: "Tech Explanation",
      className: "category-tech-explanation",
      collapsible: false,
      items: [
        "tech-explanation/nervos-blockchain",
        "tech-explanation/cell-model",
        "tech-explanation/ckb-vm",
        "tech-explanation/consensus",
        "tech-explanation/economics",
        "tech-explanation/glossary",
      ]
    },
    {
      type: "category",
      label: "Ecosystem",
      className: "category-ecosystem",
      collapsible: false,
      items: [
        "ecosystem/projects",
      ]
    },
    {
      type: "category",
      label: "Resources",
      className: "category-resources",
      collapsible: false,
      items: [
        {
          type: "link",
          label: "Positioning Paper",
          href: "https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0001-positioning/0001-positioning.md",
        },
        {
          type: "link",
          label: "CKB RFCs",
          href: "https://github.com/nervosnetwork/rfcs",
        },
        {
          type: "link",
          label: "CKB Dev Log",
          href: "https://github.com/nervosnetwork/ckb/discussions/categories/dev-log",
        }
      ]
    },
  ],
};
